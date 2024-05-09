const express = require('express'); 
const bodyParser = require('body-parser');
const app = express(); 
app.use(bodyParser.json());
let livros = [];
app.get('/livros', (req, res) => { 
    res.json(livros); 
    });
    app.get('/livros/:titulo', (req, res) => { 
        const { titulo } = req.params; 
        const livro = livros.find(v => v.titulo === titulo); 
        if (livro) { 
        res.json(livro); 
        } else { 
        res.status(404).json({ message: 'Livros não encontrado.' }); 
        } 
        });
        

        app.post('/livros', (req, res) => { 
            const { titulo, autor, genero, anoPublicacao } = req.body; 
            const livro= { titulo, autor, genero, anoPublicacao }; 
            livros.push(livro); 
            res.status(201).json({ message: 'Livro cadastrado com sucesso.' }); 
            });
            
            app.put('/livros/:titulo', (req, res) => { 
                const { titulo } = req.params; 
                const { autor, genero, anoPublicacao } = req.body; 
                const livro= livros.find(v => v.titulo === titulo); 
                if (livro) { 
                    livro.autor = autor || livro.autor; 
                    livro.genero = genero || livro.genero; 
                    livro.anoPublicacao = anoPublicacao || livro.anoPublicacao; 
                res.json({ message: 'Informações do livro atualizadas com sucesso.' });
                } else {
                res.status(404).json({ message: 'Livro não encontrado.' }); 
                } 
                });
                
                app.delete('/livros/:titulo', (req, res) => { 
                    const { titulo } = req.params; 
                    const livroIndex = livros.findIndex(v => v.titulo === titulo); 
                    if (livroIndex !== -1) { 
                    livros.splice(livroIndex, 1); 
                    res.json({ message: 'Livro excluído com sucesso.' }); 
                    } else { 
                    res.status(404).json({ message: 'Livro não encontrado.' }); 
                    } 
                    });
                    
                    const port = 3000; 
app.listen(port, () => { 
console.log(`Servidor rodando em http://localhost:${port}`); 
});
