class MerchantItemsSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :payment_status
end
