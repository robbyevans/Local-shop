class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :password_digest, :role
  has_many :stores
  has_many :admins
end
