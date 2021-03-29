class SearchService
  def self.search(query, engines)
    limit = 10 / engines.size
    bing_results = []
    google_results = []
    normalized_query = query.downcase
    bing_results = BingSearchService.search(normalized_query, limit) if engines.include? "bing"
    google_results = GoogleSearchService.search(normalized_query, limit) if engines.include? "google"
    bing_results + google_results
  end
end