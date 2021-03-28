require "rails_helper"

RSpec.describe "Search endpoint", type: :request do
  describe "GET /search" do
    context "Invalid params" do
      context "Missing" do
        it "both query params" do
          get "/api/search"
          expect(response).to have_http_status(422)
        end

        it "'engine' query param" do
          get "/api/search?q=this+is+some+text"
          expect(response).to have_http_status(422)
        end

        it "'query' query param" do
          get "/api/search?e[]=google"
          expect(response).to have_http_status(422)
        end
      end
      
      context "Wrong" do
        it "'engine' query param" do
          get "/api/search?e[]=duckduckgo&e[]=google&p=this+is+some+text"
          expect(response).to have_http_status(422)
        end
      end
    end
  end

  private
  def payload
    JSON.parse(response.body)
  end
end