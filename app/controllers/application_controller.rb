class ApplicationController < ActionController::API
  include ActionController::Cookies

  def authorize
    return render json: {errors: []}, status: :unauthorized unless session.include? :admin_id
   end
end
