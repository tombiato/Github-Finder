import RepoItem from './RepoItem';
import PropTypes from 'prop-types';

const Repos = ({ repos }) =>
	repos.map(repo => <RepoItem repo={repo} key={repo.id} />);

RepoItem.propTypes = {
	repo: PropTypes.object.isRequired,
};

export default Repos;
