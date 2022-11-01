class SessionsController < ApplicationController
    def clerk_login
        clerk = Clerk.find_by(email: params[:email])
        if clerk&.authenticate(params[:password])
            session[:clerk_id] = clerk.id
            render json: clerk, status: :created
        else
            render json: {error: "Invalid email or password"}, status: :unauthorized
        end
    end

    def clerk_logout
        session.delete :clerk_id
        head :no_content
    end


    #admin login and logout
    def admin_login
        admin= Admin.find_by(email: params[:email])
        if admin&.authenticate(params[:password])
            session[:admin_id] = admin.id
            render json: admin, status: :created
        else
            render json: {error: "Invalid email or password"}, status: :unauthorized
        end
    end

    def admin_logout
        session.delete :admin_id
        head :no_content
    end

    #merchant/user login and logout
    def user_login
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: "Invalid email or password"}, status: :unauthorized
        end
    end

    def user_logout
        session.delete :user_id
        head :no_content
    end
end
