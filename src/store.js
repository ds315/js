
import {makeAutoObservable, runInAction} from 'mobx';

class Store
{
	constructor()
	{
		this.v = [];
		this.t = [];

		makeAutoObservable(this);
		this.load();
	}

	async load()
	{
		function d1(s) { return s.replace(/(\d+)-(\d+)-(\d+)/, '$3-$2-$1') }

		const response = await fetch('http://asuprog.ru/g.php?g=g1');
		const data = await response.json();

		for(let i = 0; i < data.t.length; i++) runInAction(() =>
		{
			this.v[i] = d1(data.t[i][0]);
			this.t[i] = parseFloat(data.t[i][1]);
		})
	}
}

export default new Store();
