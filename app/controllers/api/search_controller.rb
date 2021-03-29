class Api::SearchController < ApiController
  before_action :validate_params, only: [:search]

  def search
    search_result = SearchService.search(params[:q], params[:e])
    return render json: {
      data: search_result
    }, status: :ok
  end

  private
  def validate_params
    validate_included_params
    validate_engines
  end

  def validate_engines
    valid_engines = %w(google bing)
    raise ActionController::BadRequest.new(
      "Invalid engines values"
    ) unless (params[:e] - valid_engines).empty?
  end

  def validate_included_params
    raise ActionController::BadRequest.new(
      "Missing params"
    ) unless params.has_key?(:e) && params.has_key?(:q)
  end
end