class ApiController < ApplicationController
  rescue_from Exception, with: :internal_error
  rescue_from ActionController::BadRequest, with: :bad_request

  def bad_request exception
    render json: {error: exception.message}, status: :bad_request
  end

  def internal_error exception
    render json: {error: exception.message}, status: :internal_server_error
  end
end