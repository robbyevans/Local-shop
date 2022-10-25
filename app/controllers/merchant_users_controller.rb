class MerchantUsersController < ApplicationController
    def create 
        user = MerchantUser.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end

    end

    def show
        user = MerchantUser.find_by(id: session[:user_id])
        if user
        render json: user, status: :created
        else
        render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    private
    def user_params
        params.permit(:name,:email,:password,:password_confirmation)
    end
    def authorize
        return render json: {errors: []}, status: :unauthorized unless session.include? :user_id
    end
end
