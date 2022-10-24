class RequestedItemsController < ApplicationController

  def index
    request=RequestedItem.all
    render json: request, status: :ok
  end

  def create
    request=RequestedItem.create(request_params)
    render json: request, status: :created
  end

  private

  def request_params
    params.permit(:clerk_name,:quantity,:item_name,:date)
  end
end
