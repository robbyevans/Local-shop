class ClerkSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :password_digest
  belongs_to :admin
  has_many :items
  has_many :requested_items
end
