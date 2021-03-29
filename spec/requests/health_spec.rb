require "rails_helper"

RSpec.describe "Health endpoint", type: :request do
  describe "GET /api/health" do
    before { get '/api/health' }

    it "should return OK" do
      expect(payload).not_to be_empty
      expect(payload['api']).to eq('OK')
    end

    it "should return status code 200" do
      expect(response).to have_http_status(:ok)
    end
  end

  private
  def payload
    JSON.parse(response.body)
  end
end