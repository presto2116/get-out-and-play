class AddActivityImgToActivities < ActiveRecord::Migration
  def change
    add_column :activities, :activity_img, :text
  end
end
