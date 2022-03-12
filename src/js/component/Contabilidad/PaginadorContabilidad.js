import React, { useContext } from "react";
import { Context } from "../../store/AppContext";

const PaginadorContabilidad = () => {
	const { store, actions } = useContext(Context);
	let rango = [...Array(store.paginasClientesContabilidad).keys()];
	let actual = store.paginaActualClientesContabilidad;

	const Lista = (objeto, i, actual) => {
		if (rango.length <= 10) {
			return (
				<li key={i}>
					<a
						key={i}
						className={objeto + 1 == actual ? "sell disabled" : ""}
						onClick={() => HandlerClick(objeto)}
					>
						{objeto + 1}
					</a>
				</li>
			);
		} else {
			if (
				objeto == 0 ||
				objeto == 1 ||
				objeto == 2 ||
				objeto == rango.at(-1) ||
				objeto == rango.at(-2) ||
				objeto == rango.at(-3)
			) {
				if (objeto + 1 == actual - 2 || objeto + 1 == actual + 2) {
					return (
						<li key={i}>
							<a key={i}>....</a>
						</li>
					);
				}
				return (
					<li key={i}>
						<a
							key={i}
							className={objeto + 1 == actual ? "sell disabled" : ""}
							onClick={() => HandlerClick(objeto)}
						>
							{objeto + 1}
						</a>
					</li>
				);
			} else {
				if (
					objeto + 1 == actual - 1 ||
					objeto + 1 == actual ||
					objeto + 1 == actual + 1
				) {
					return (
						<li key={i}>
							<a
								key={i}
								className={objeto + 1 == actual ? "sell disabled" : ""}
								onClick={() => HandlerClick(objeto)}
							>
								{objeto + 1}
							</a>
						</li>
					);
				}
			}
			if (objeto + 1 == actual - 2 || objeto + 1 == actual + 2) {
				return (
					<li key={i}>
						<a key={i}>....</a>
					</li>
				);
			}
		}
	};

	const HandlerClick = (objeto) => {
		actions.getClientesContabilidad(objeto + 1);
	};

	const HandlerClickFlechas = (actual, string) => {
		if (string === "Avanzar") {
			if (actual <= rango.at(-1)) {
				actions.getClientesContabilidad(actual + 1);
			}
		} else if (string === "Retroceder") {
			if (actual != 1) {
				actions.getClientesContabilidad(actual - 1);
			}
		}
	};

	return (
		<nav aria-label='Pagination'>
			<ul className='pagination'>
				<li
					className='pagination-previous'
					onClick={(e) => HandlerClickFlechas(actual, "Retroceder")}
				>
					<a></a>
				</li>
				{store.clientesContabilidad != null
					? rango.map((objeto, i) => Lista(objeto, i, actual))
					: null}
				<li
					className='pagination-next'
					onClick={(e) => HandlerClickFlechas(actual, "Avanzar")}
				>
					<a></a>
				</li>
			</ul>
		</nav>
	);
};

export default PaginadorContabilidad;
