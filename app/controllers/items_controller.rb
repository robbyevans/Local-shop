class ItemsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    items=Item.all
    render json:items, status: :ok
  end

  def show
    items=Item.find_by(id:params[:id])
    render json:items, status: :ok 
  end


  def create
    items=Item.create(item_params)
    render json:items, status: :created
  end

  def update
    items=Item.find_by(id:params[:id])
    items.update(item_params)
    render json:items,status: :created
  end

  def destroy
    item=find_item
    item.destroy
    head :no_content
  end

  private
  def item_params
    params.permit(:name, :quantity,:inStock,:spoilt,:BuyingPrice,:SellingPrice,:paid, :clerk_id)
  end

  def find_item
    Item.find(params[:id])
  end

  def render_not_found_response
    render json: {error:"Event not found!"},status: :not_found
  end
end
