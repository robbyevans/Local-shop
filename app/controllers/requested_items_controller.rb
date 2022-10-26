class RequestedItemsController < ApplicationController

  def index
    request=RequestedItem.all
    render json: request, status: :ok
  end

  def create
    request=RequestedItem.create(request_params)
    render json: request, status: :created
  end

  def destroy
    request=find_request
    request.destroy
    head :no_content
  end

  private

  def request_params
    params.permit(:clerk_name,:quantity,:item_name,:date)
  end

  def find_request
    RequestedItem.find(params[:id])
  end
end
