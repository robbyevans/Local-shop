class ClerksController < ApplicationController
  def show
    clerk = Clerk.create(clerk_params)
    render json:clerks, status: :ok
  end   


    def index
    clerks = Clerk.all
    render json:clerks, status: :ok
  end

  def create
    clerks = Clerk.create(clerk_params)
    render json:clerks, status: :created
  end


  def destroy
    clerk = find_clerk
    Clerk.destroy
    head :no_content
  end

  private
  def clerk_params
    params.permit(:full_name, :email,:password_digest)
  end

  def find_clerk
    Clerk.find(params[:id])
  end
end
