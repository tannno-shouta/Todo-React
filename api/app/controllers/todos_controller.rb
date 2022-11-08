class TodosController < ApplicationController
  protect_from_forgery

  def index
    todos = Todo.all
    render json: todos
  end

  def create
    text = params["text"]
    Todo.create({text: text})
    render json: Todo.all
  end

  def destroy
    delete_id = params["id"]
    Todo.destroy(delete_id)
    render json: Todo.all
  end

end
