require "rails_helper"

RSpec.describe "Search endpoint", type: :request do
  let!(:google_results) { generate_results("google") }
  let!(:bing_results) { generate_results("bing") }
  describe "GET /search" do
    context "Invalid params" do
      context "Missing" do
        it "both query params" do
          get "/api/search"
          expect(response).to have_http_status(:bad_request)
        end

        it "'engine' query param" do
          get "/api/search?q=this+is+some+text"
          expect(response).to have_http_status(:bad_request)
        end

        it "'query' query param" do
          get "/api/search?e[]=google"
          expect(response).to have_http_status(:bad_request)
        end
      end
      
      context "Wrong" do
        it "'engine' query param" do
          get "/api/search?e[]=duckduckgo&e[]=google&q=this+is+some+text"
          expect(response).to have_http_status(:bad_request)
        end
      end
    end
    
    context "Valid params" do
      it "google search" do
        allow(GoogleSearchApi).to receive(:web).and_return(google_results)
        get "/api/search?e[]=google&q=this+is+some+text"
        result_ids = payload["data"].map { |res| res["id"] }
        google_results[:results].each do |result|
          expect(result_ids).to include(result[:id])
        end
      end
      
      it "bing search" do
        allow(BingSearchApi).to receive(:web).and_return(bing_results)
        get "/api/search?e[]=bing&q=this+is+some+text"
        result_ids = payload["data"].map { |res| res["id"] }
        bing_results[:results].each do |result|
          expect(result_ids).to include(result[:id])
        end
      end
      
      it "bing and google search" do
        allow(GoogleSearchApi).to receive(:web).and_return(google_results)
        allow(BingSearchApi).to receive(:web).and_return(bing_results)
        get "/api/search?e[]=bing&e[]=google&q=this+is+some+text"
        bingresult_ids = payload["data"].map { |res| res["id"] }
        bing_results[:results].slice(0, 5).each do |result|
          expect(bingresult_ids).to include(result[:id])
        end
        google_result_ids = payload["data"].map { |res| res["id"] }
        google_results[:results].slice(0, 5).each do |result|
          expect(google_result_ids).to include(result[:id])
        end
      end
    end
  end

  private
  def payload
    JSON.parse(response.body)
  end

  def generate_results source
    {
      results: Array.new(10, {
        id: Faker::IDNumber.valid,
        title: Faker::Lorem::sentence,
        url: Faker::Avatar.image,
        overview: Faker::Lorem::paragraph,
        source: source
      })
    }
  end
end