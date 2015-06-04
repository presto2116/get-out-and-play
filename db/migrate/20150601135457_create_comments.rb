class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
    	t.belongs_to :activity
    	t.belongs_to :user
    	t.text :user_name
    	t.text :body
    end
  end
end
