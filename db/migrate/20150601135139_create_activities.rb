class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
    	t.belongs_to :user
    	t.text :creator
    	t.text :title
    	t.date :date
    	t.text :location
    	t.text :description
    end
  end
end
