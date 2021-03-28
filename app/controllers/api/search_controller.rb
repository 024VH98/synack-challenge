class Api::SearchController < ApplicationController
  def search
    return render json: {}, status: :unprocessable_entity unless valid_params?
    return render json: {
      engine: params[:e],
      query: params[:q]
    }, status: :ok
  end

  private
  def valid_params?
    return false unless parameters_included? && valid_engines?
    true
  end

  def valid_engines?
    valid_engines = %w(google bing)
    (params[:e] - valid_engines).empty?
  end

  def parameters_included?
    params.has_key?(:e) && params.has_key?(:q)
  end
end