class GoogleSearchService
  def self.search(query, limit = 10)
    search_result = GoogleSearchApi.web(query)
    return [] if search_result.has_key? "error"
    return search_result[:results].slice(0, limit)
  end
end