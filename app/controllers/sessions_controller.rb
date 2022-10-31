class SessionsController < ApplicationController
    def create
        clerk = Clerk.find_by(email: params[:email])
        if clerk&.authenticate(params[:password])
            session[:clerk_id] = clerk.id
            render json: clerk, status: :created
        else
            render json: {error: "Invalid email or password"}, status: :unauthorized
        end
    end

    def destroy
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
end
