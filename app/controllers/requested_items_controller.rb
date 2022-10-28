class RequestedItemsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    request=RequestedItem.all
    render json: request, status: :ok
  end

  def show
    request=RequestedItem.find_by(id:params[:id])
    render json:request, status: :ok
  end

  def create
    request=RequestedItem.create(request_params)
    render json: request, status: :created
  end

  def update
    request=RequestedItem.find_by(id:params[:id])
    request.update(request_params)
    render json:request,status: :created
  end

  def destroy
    request=find_request
    request.destroy
    head :no_content
  end

  private

  def request_params
    params.permit(:clerk_name,:quantity,:item_name,:date, :clerk_id)
  end

  def find_request
    RequestedItem.find(params[:id])
  end

  def render_not_found_response
    render json: {error:"Event not found!"},status: :not_found
  end
end
