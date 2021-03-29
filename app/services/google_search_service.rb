class GoogleSearchService
  def self.search(query, limit = 10)
    search_result_encoded = Rails.cache.fetch("google-#{query}", expires_in: 1.hours) do
      search_result = GoogleSearchApi.web(query)
      return [] if search_result.has_key? "error"
      JSON.generate(search_result)
    end
    Rails.cache.delete("google-#{query}") if search_result_encoded == []
    JSON.parse(search_result_encoded)["results"].slice(0, limit)
  end
end