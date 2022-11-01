class AdminSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :password_digest, :store_id, :status, :token, :user_id
  belongs_to :user
  belongs_to :store
  has_many :clerks
  has_many :items, through: :clerks
  has_many :requested_items, through: :clerks
end
