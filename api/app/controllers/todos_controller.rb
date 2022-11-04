class TodosController < ApplicationController
  protect_from_forgery

  def index
    todos = Todo.all
    render json: todos
  end

  def create
    text = param["text"]
    Todo.create({text: text})
    render json: Todo.all
  end

  def destroy
    Todo.destroy({text: text})
    render json: Todo.all
  end

end
