class StoreSerializer < ActiveModel::Serializer
  attributes :id, :store_name, :location, :description
  has_one :admin
end
