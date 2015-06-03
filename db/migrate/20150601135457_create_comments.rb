class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
    	t.belongs_to :user
    	t.integer :activity_id
    	t.text :comment
    end
  end
end
