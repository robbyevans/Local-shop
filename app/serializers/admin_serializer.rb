class AdminSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :store_id, :status
  belongs_to :store
  has_many :clerks
  has_many :items, through: :clerks
  has_many :requested_items, through: :clerks
end
