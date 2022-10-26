class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :inStock, :spoilt, :BuyingPrice, :SellingPrice, :paid
end
