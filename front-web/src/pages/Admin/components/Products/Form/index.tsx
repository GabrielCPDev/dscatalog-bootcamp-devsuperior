import { makePrivateRequest } from 'core/utils/request';
import React from 'react';
import { useForm } from 'react-hook-form';
import BaseForm from '../../BaseForm';
import './styles.scss';

type FormState = {
    name: string;
    price: string;
    category: string;
    description: string;
    imageUrl: string
}
const Form = () => {
    const { register, handleSubmit, errors } = useForm<FormState>();

    const onSubmit = (formData: FormState) => {

    }
    makePrivateRequest({ url: '/products', method: 'POST' });



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <BaseForm title="CADASTRAR PRODUTO">
                <div className="row">
                    <div className="col-6">
                        <div className="margin-botton-30">
                            <input
                                name="name"
                                type="text"
                                className="form-control input-base"
                                ref={register({ 
                                    required: "Campo obrigatorio" ,
                                    minLength:{ value:5, message: "O campo deve ter no mínimo 5 caracteres!"},
                                    maxLength:{value: 60, message: 'O campo pode ter no máximo 60 caracteres!'}
                                })}
                                placeholder="Nome do Produto"
                            />
                            {
                                errors.name && (
                                    <div className="invalid-feedback d-block">
                                        {errors.name.message}
                                    </div>
                                )
                            }
                        </div>

                        <div className="margin-botton-30">
                            <input
                                name="price"
                                type="number"
                                className="form-control input-base "
                                placeholder="Preço"
                                ref={register({ required: "Campo obrigatorio" })}
                            />
                            {
                                errors.price && (
                                    <div className="invalid-feedback d-block">
                                        {errors.price.message}
                                    </div>
                                )
                            }
                        </div>
                        <div className="margin-bottom-30">
                            <input
                                name="imageUrl"
                                type="text"
                                className="form-control input-base"
                                placeholder="Imagem do Produto"
                                ref={register({ required: "Campo obrigatorio" })}
                            />
                            {
                                errors.imageUrl && (
                                    <div className="invalid-feedback d-block">
                                        {errors.imageUrl.message}
                                    </div>
                                )
                            }
                        </div>

                    </div>
                    <div className="col-6">
                        <textarea
                            className="form-control input-base"
                            placeholder="descrição"
                            name="description"
                            ref={register({ required: "Campo obrigatorio" })}
                            cols={30}
                            rows={10}
                        />
                         {
                                errors.description && (
                                    <div className="invalid-feedback d-block">
                                        {errors.description.message}
                                    </div>
                                )
                            }
                    </div>
                </div>
            </BaseForm>
        </form>

    );
}


export default Form;