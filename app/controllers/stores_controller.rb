class StoresController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    def create
        store = Store.create(store_params)
        render json: store, status: :created
    end

    def index
        render json: Store.all , status: :ok
    end

    def store_items
        store=Store.find_by(id: params[:id])
        render json: store.items,status: :ok
    end

    def show
        store = Store.find_by_id(params[:id])
        render json: store, status: :ok
    end

    private 
    def store_params
        params.permit(:store_name, :location, :description, :user_id)
    end
    def record_not_found
        render json: { error: "Store not found" }, status: :not_found
    end

end
