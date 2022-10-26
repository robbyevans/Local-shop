class AdminSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :store_id, :status
  belongs_to :store
end
