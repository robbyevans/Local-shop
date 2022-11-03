class StoreSerializer < ActiveModel::Serializer
  attributes :id, :store_name, :location, :description, :user_id
  has_one :admin
  has_many :clerks, through: :admin
  has_many :items, through: :clerks
  has_many :requested_items, through: :clerks
  belongs_to :user
end
