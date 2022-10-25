class ItemsController < ApplicationController

  def index
    items=Item.all
    render json:items, status: :ok
  end

  def create
    items=Item.create(item_params)
    render json:items, status: :created
  end

  def destroy
    item=find_item
    item.destroy
    head :no_content
  end

  private
  def item_params
    params.permit(:name, :quantity,:inStock,:BuyingPrice,:SellingPrice)
  end

  def find_item
    Item.find(params[:id])
  end
end
