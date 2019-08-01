class CreateApartments < ActiveRecord::Migration[5.2]
  def change
    create_table :apartments do |t|
      t.string :address
      t.string :city
      t.string :zipcode

      t.timestamps
    end
  end
end
