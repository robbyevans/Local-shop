class StoresController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    def create
        store = Store.create(store_params)
        render json: store, status: :created
    end
    private 
    def store_params
        params.permit(:full_name, :email, :password, :store, :status)
    end
    def record_not_found
        render json: { error: "Store not found" }, status: :not_found
    end

end
