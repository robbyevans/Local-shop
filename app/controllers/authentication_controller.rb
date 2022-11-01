class AuthenticationController < ApplicationController

    # POST /auth/login
    def login
      user = User.find_by(email: params[:email])
      if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user
      else
          render json: {errors: []}, status: :unauthorized
      end
    end

    def destroy
      user = User.find_by(id: session[:user_id])
      if user
          session.delete :user_id
          head :no_content
      else
          render json: {errors: []}, status: :unauthorized
 
      end
  end

  
end
