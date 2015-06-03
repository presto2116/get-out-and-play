class CreateActivityRegistrations < ActiveRecord::Migration
  def change
    create_table :activity_registrations do |t|
    	t.integer :user_id
    	t.text :user_name
    	t.integer :activity_id
    end
  end
end
