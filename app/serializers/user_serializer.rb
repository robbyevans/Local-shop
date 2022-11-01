class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :password_digest, :role
  has_many :stores
  has_many :admins
  has_many :clerks, through: :admins
  has_many :items, through: :clerks
  has_many :requested_items, through: :clerks
 
end
