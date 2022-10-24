class AdminSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :store
end
