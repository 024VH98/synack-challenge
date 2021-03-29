class BingSearchApi
  BING_API_KEY = ENV['BING_API_KEY']
  BING_URI = ENV['BING_URI']
  BING_PATH = ENV['BING_PATH']

  def self.web(query)
    uri = URI("#{BING_URI}#{BING_PATH}?q=#{URI.escape(query)}&responseFilter=webpages")
    request = Net::HTTP::Get.new(uri)
    request['Ocp-Apim-Subscription-Key'] = BING_API_KEY

    response = Net::HTTP.start(uri.host, uri.port, :use_ssl => uri.scheme == 'https') do |http|
        http.request(request)
    end
    return normalize_response(JSON.parse(response.body))
  end

  def self.normalize_response payload
    return {error: payload['error']} if payload.has_key? "error"
    {
      results: payload["webPages"]["value"].map do |result|
        {
          id: result["id"],
          title: result["name"],
          url: result["url"],
          overview: result["snippet"],
          source: "bing"
        }
      end
    }
  end
end