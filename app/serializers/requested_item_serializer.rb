class RequestedItemSerializer < ActiveModel::Serializer
  attributes :id, :clerk_name, :quantity, :item_name, :date
end
