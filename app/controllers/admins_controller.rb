class AdminsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record

    def create
        admin = Admin.create(admin_params)
        if admin.valid?
            # session[:admin_id] = admin.id
            render json: admin, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
        #render json: admin, status: :created
    end



    def index
        admins = Admin.all
        render json: admins, status: :ok
    end
    def show
        admin = Admin.find_by_id(params[:id])
        render json: admin, status: :ok
    end

    def update
        admin = Admin.find_by(id: params[:id])
        admin.update(admin_update_params)
        render json: admin, status: :ok
    end

    def destroy
        admin = Admin.find_by(id: params[:id])
        admin.destroy
        head :no_content
    end

    private 
    def admin_params
        params.permit(:full_name, :email, :password, :store_id, :status, :token, :user_id)
    end
    def admin_update_params
        params.permit(:status)
    end
    def record_not_found
        render json: { error: "Admin not found" }, status: :not_found
    end
    def authorize
        return render json: {errors: []}, status: :unauthorized unless session.include? :user_id
    end
    
end
