class CreateFriendships < ActiveRecord::Migration
  def change
    create_table :friendships do |t|
    	t.belongs_to :user
    	t.integer :friend_id
    	t.boolean :confirmed
    end
  end
end
