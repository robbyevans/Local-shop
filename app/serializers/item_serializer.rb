class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :inStock, :spoilt, :BuyingPrice, :SellingPrice, :paid
  belongs_to :clerk
end
