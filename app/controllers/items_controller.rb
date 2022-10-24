class ItemsController < ApplicationController

  def index
    items=Item.all
    render json:items, status: :ok
  end

  def create
    items=Item.create(item_params)
    render json:items, status: :created
  end

  private
  def item_params
    params.permit(:name, :quantity,:inStock,:BuyingPrice,:SellingPrice)
  end
end
