class Admin < ApplicationRecord
    
    validates :full_name, presence: true
    validates :email, presence: true
    validates :store_id, presence: true
    validates :password, presence: true
    has_secure_password
    
    belongs_to :user
    belongs_to :store
    has_many :clerks
    has_many :items, through: :clerks
    has_many :requested_items, through: :clerks
    


      
end

