class GoogleSearchApi
  def self.web(query)
    normalize_response(GoogleCustomSearchApi.search(query))
  end

  def self.normalize_response(payload)
    return {error: payload["error"]} if payload["error"]
    {
      results: payload['items'].map do |result|
        {
          id: result["link"],
          title: result["title"],
          url: result["link"],
          overview: result["snippet"],
          source: "google"
        }
      end
    }
  end
end