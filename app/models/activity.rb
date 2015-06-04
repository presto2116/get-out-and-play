class Activity < ActiveRecord::Base
	has_many :activity_registrations
	has_many :comments
	validates :title, :date, :location, :description, :presence => true
end